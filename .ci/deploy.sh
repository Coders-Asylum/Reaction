#!bin/sh

echo "Deployment Started"

git config --global user.email $EMAIL
git config --global user.name $USERNAME
git remote set-url origin https://$DEPLOY_TOKEN@github.com/Coders-Asylum/Reaction
git fetch --all

# Get the current branch
BRANCH=$(git symbolic-ref --short -q HEAD)
echo "$BRANCH"
# no of times the loop has to run in case of error
CHECK=3
# loop

while [ "$CHECK" -gt 0 ]
do
    if [ "$BRANCH" = "master" ]
    then
        # check if changes are present in the current working branch
        if ! git --git-dir="./.git" diff --quiet
        then
            #  ADD AND COMMIT AS
            git add --all
            git commit --all -m "Committed during   $(date) build"
        fi

        # switch to the live branch
        git switch live
        # copy the latest build
        git checkout master employee-info/build
        git checkout master sample/build 

        # store the current branch to check if branch changed to live
        BRANCH=$(git symbolic-ref --short -q HEAD)

        if [ "$BRANCH" = "live" ]
        then
            # doing a commit
            git add --all
            git commit --all -m 'New build transfered from prodction branch'


            # deletes all the file expect ./employee-info/build, ./sample/build/, .git/ folder files and README.md
            # this deletes all the previous build files
            find . -mindepth 1 ! -regex '^./.git\(/.*\)?\|^./employee-info/build\(/.*\)?\|^./sample/build\(/.*\)?\|^./README.md?' -delete
            # copies the new build from ./build/web to current folder
            cd ./employee-info
            cp -a ./build/. .
            cd ..
            cd ./sample
            cp -a ./build/. .
            cd ..

            # deletes the build folder
            rm -r ./employee-info/build/
            rm -r ./sample/build/

            # check if changes are present in the current working branch
            if ! git --git-dir="./.git" diff --quiet
            then
                git add --all
                git commit --all -m "New Build: Built on-$(date)"
            fi

            CHECK=0
            git push origin
            echo  "Deployed to Live"
        else
            echo "Branch not changed" 1>&2
            exit 1
        fi

    else
        git switch master
        git pull origin
    fi
    CHECK=`expr $CHECK - 1`
done