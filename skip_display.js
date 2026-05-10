function evaluateCondition(rule, response) {
  //To check if an object has a key use Object.hasOwn(object name, key name)
  if (!Object.hasOwn(response, rule.field)) {
    return false;
  }

  const responseValue = response[rule.field];
  const ruleValue = rule.value;

  if (rule.operator === "equals") {
    return responseValue === ruleValue;
  }

  if (rule.operator === "notEquals") {
    return responseValue !== ruleValue;
  }
  if (rule.operator === "greaterThan") {
    return responseValue > ruleValue;
  }
  if (rule.operator === "lessThan") {
    return responseValue < ruleValue;
  }
  if (rule.operator === "contains") {
    //To check if the given input is an array use Array.isArray()
    if (Array.isArray(responseValue) || typeof responseValue === "string") {
      return responseValue.includes(ruleValue);
    }

    return false;
  }
}

const rule = {
  field: "age",
  operator: "greaterThan",
  value: 18,
};
const response = {
  age: 20,
  country: "India",
  techStack: ["React", "NextJs"],
};
console.log(evaluateCondition(rule, response));
