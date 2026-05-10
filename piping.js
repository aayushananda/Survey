//Write a js function pipeText(template, variables)
//that replaces all instances of placeholders in a string with their corresp values from a variables object

function pipeText(template, variables) {
  const result = template.replace(/{(\w+)}/g, (match, key) => {
    return variables.hasOwnProperty(key) ? variables[key] : "";
  });
  return result;
}

const t =
  "Hey {name}, thanks for rating us a {score}. Why did you give a {score}?";
const v = { name: "Aayush", score: 9 };

// Expected Output: "Hey Aayush, thanks for rating us a 9. Why did you give a 9?"
console.log(pipeText(t, v));
