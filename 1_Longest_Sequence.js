function LongestSequence(str)
{
    var longest = 1;
    var character = str[0];
    str = str.toLowerCase();
    var start = str[0];
    for (var  index = 1; index < str.length-1; index++)
    {
        var sequence = 1;
        if (start == str[index])
        {
            for (var next = index; next < str.length && str[next] == start; next++)
            {
                sequence++;
            }
            if (sequence > longest)
            {
                longest = sequence;
                character = start;
            }
        }
        else
        {
            start = str[index];
        }
    }
    return `${character}: ${longest}`;
}

console.log(LongestSequence("asdDDDDa"));
console.log(LongestSequence("asdDDDD"));
