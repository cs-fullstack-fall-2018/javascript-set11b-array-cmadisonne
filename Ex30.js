function main()
{
 var nameArray = ["Indigo", "Lotus", "Sah", "Ayo"];
 document.write(nameArray.slice(2));
 nameArray.splice(1);
 document.write(nameArray.slice(2));
}

main();