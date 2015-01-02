

function randomLongNumber(){
# 12 digits
#	let "r = ($RANDOM%10000)*100000000 + ($RANDOM%10000)*10000 + ($RANDOM%10000)"

# 10 digits
	let "r = ($RANDOM%100)*1000000 + ($RANDOM%10000)*10000 + ($RANDOM%10000)"
}

randomLongNumber
param="case=${r}"
for i in {1..100} ; do
	randomLongNumber
	param="$param,${r}"
done

for lang in python java go php ; do
 host="http://${lang}.bench-equal-sums.appspot.com"
 url="${host}/?$param"
 echo $url
done