var katzDeliLine = [];


function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  let lineString = 'The line is currently:'
  
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    line.forEach(function(person, i){
      if (i < line.length - 1) {
        lineString += ` ${i + 1}. ${person},`
      } else {
        lineString += ` ${i + 1}. ${person}`
      }
    })
  }
  return lineString;
}




