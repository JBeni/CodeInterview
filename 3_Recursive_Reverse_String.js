function reverseString(str)
{
    if ( str.length == 0)
    {
        return "";
    }
    else if (str.length == 1)
    {
        return str;
    }
    else
    {
        return reverseString(str.substr(1)) + str[0];
    }
    
}

console.log(reverseString("abcb"));
console.log(reverseString("test"));
console.log(reverseString("racecar"));
