#!/bin/bash
path=$2;
d=$(date +%H:%M-%d-%b);
message="New Conf Test  ${1} added at ${d}";
(cd $path;git add --all ;git commit -m "${message}";git push ssh_conf master)
exit 0
