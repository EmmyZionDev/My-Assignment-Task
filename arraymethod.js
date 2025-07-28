
const largestNum = [3,1,4,4,2,5];
const largestDistinctNum =(largestNum)=>{
const removeDup = [...new Set(largestNum)]
const sort = removeDup.sort((a,b)=>b-a)
const result = sort.slice(0,2)
return result;
};console.log(largestDistinctNum(largestNum));



const arrFrults = ["apple", "banana","kiwi"]
const fruits = (arrFrults)=>{
const result ={}
arrFrults.forEach(e =>{ 
 result[e]=e.length})
 return result;
}; console.log(fruits(arrFrults))



const nestedArr = [[1,2],[3,4],[5]];
const arr =(nestedArr)=>{
  return nestedArr.flat();
}; console.log(arr(nestedArr))


const Numbs = [3,8,15,2,10]
 let evens =[]
 let odds =[]
 const arrNumbs =(Numbs)=>{
 Numbs.forEach(e => {
  if(e % 2 === 0){evens.push(e)}
  else{odds.push(e)}});
  return {evens, odds}
 };console.log(arrNumbs(Numbs))


  
 const arrOfObj = [
  { department: "HR", employees: [{ salary: 3500 }, { salary: 3500 }] },
  { department: "IT", employees: [{ salary: 5000 }, { salary: 7000 }] }];
  const arv = (arrOfObj) => {
  let highAvg = 0;
  let bestDep = "";
  arrOfObj.forEach((item) => {
  const totalSalary = item.employees.reduce((sum, empl) =>
    sum + empl.salary, 0);
   const avgSalary = totalSalary / item.employees.length;
   if (avgSalary > highAvg) {
      highAvg = avgSalary;
      bestDep = item.department;}
  });
 return { department: bestDep };
}; console.log(arv(arrOfObj))



