#!/bin/bash

T=10000
N=100

function randomLongNumber(){
# 12 digits
#	let "r = ($RANDOM%10000)*100000000 + ($RANDOM%10000)*10000 + ($RANDOM%10000)"

# 8 digits
#	let "r = ($RANDOM%10000)*10000 + ($RANDOM%10000)"

# 7 digits
#	let "r = ($RANDOM%1000)*10000 + ($RANDOM%10000)"
	
# 6 digits
	let "r = ($RANDOM%100)*10000 + ($RANDOM%10000)"
}

echo "\"case\""
for ((i=1; i <= T ; i++)) ; do
	randomLongNumber
	c="${r}"
	for ((j=1; j <= N ; j++)) ; do
		randomLongNumber
		c="$c,${r}"
	done
	echo "\"$c\""
done

#for lang in python java go php ; do
# host="http://${lang}.bench-equal-sums.appspot.com"
# param="case=${c}"
# url="${host}/?$param"
# echo $url
#done