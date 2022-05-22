function values(obj) {
    // Implementation here
    return Object.keys(obj).map(prop => obj[prop])
  }
  
  // Ejemplo:
  console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]


  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.walk = function() {
    console.log("I'm walking");
  };
  
  var john = new Person("John");
  console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

  /**
   * [ Califications ] 
   * Califications exercise
   */

   const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };  


   function printAverage(classResults) {
    const results = values(classResults);
    const sumResults = results.reduce((currentResult, nextResult)=> currentResult +=  nextResult);
    const media = sumResults / results.length;
    const mediaTitle = getMarkRange(media);
    return `${mediaTitle} - ${media}`
  }

  function getMarkRange(media){
      if(media >= 10){
          return "Matrícula de honor"
      } else if (media < 10 && media > 9){
          return "Sobresaliente"
      } else if (media < 9 && media > 7){
          return "Notable"
      } else if(media < 7 && media > 6){
          return "Bien"
      } else if(media < 6 && media > 5){
          return "Suficiente"
      } else if (media < 5 && media > 4) {
        return "Insuficiente"
      } else if (media <= 4){
        return "Muy deficiente"
      }
  }

  console.log(printAverage(eso2o))