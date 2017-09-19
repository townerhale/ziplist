const listy1 = ['a', 'b', 'c'];
const listy2 = ['d', 'e', 'f'];
function zipList(list1, list2)
{
  const holdEmpty = [];
  for (let i = 0; i < list1.length; i++)
  {
      holdEmpty.push(list1[i], list2[i]);
  }
  return holdEmpty;
}

function zippy(list1, list2)
{
    return _.flatten(_.zip(list1, list2));
}
console.log(zippy(listy1, listy2));