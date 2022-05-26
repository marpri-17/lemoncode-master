console.log("************** DELIVERABLE 05 *********************");
enum WinProbability {
  medium = 0.5,
  intermediate = 0.7,
  high = 0.9
}


class SlothMachine {
    public coins: number;
    private probability: number;

    constructor(){
      this.coins = 0;
      this.probability = WinProbability.intermediate;
    }d

    public play(): void{
      this.coins++;
      const gamble:boolean[] = [this.generateBoolean(), this.generateBoolean(), this.generateBoolean()];
      if(gamble.some(move => move === false)){
        console.log('Good luck next time!!');
      } else {
        console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
        this.resetCoins();
      } 
    }

    private resetCoins():void{
      this.coins = 0;
    }

    private generateBoolean():boolean{
      return Math.random() < this.probability
    }
  }
  
  const machine1 = new SlothMachine();
  console.log(machine1.coins);
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"