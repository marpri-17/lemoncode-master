console.log("************** DELIVERABLE 05 *********************");
console.log(
  "%cSLOT MACHINE -> play slot machine with booleans",
  "color: blue; font-weight: bold"
);

enum WinProbability {
  normal = 0.5,
  medium = 0.7,
  high = 0.9,
}

type GambleModel = [boolean, boolean, boolean];

class SlothMachine {
  // Coins is the reward for winning
  public coins: number;
  // Change this property at constructor for set desired win probability
  private probability: number;

  constructor() {
    this.coins = 0;
    this.probability = WinProbability.medium;
  }

  /**
   * Generate a gamble with three ramdon booleans
   */
  public play(): void {
    this.addCoin();
    const gamble: GambleModel = [
      this.generateBoolean(),
      this.generateBoolean(),
      this.generateBoolean(),
    ];
    console.log("You played one coin and you're gamble is: ", gamble);
    if (this.isWinningGamble(gamble)) {
      console.log(
        `Good luck next time!! Jackpot is ${
          this.coins === 1 ? "1 coin" : `${this.coins} coins`
        }`
      );
    } else {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.resetCoins();
    }
  }

  /**
   * Add one coins to general counter when play a gamble
   *
   */
  private addCoin(): void {
    this.coins++;
  }

  /**
   * Set counter to 0
   */
  private resetCoins(): void {
    this.coins = 0;
  }

  /**
   * Generates ramdom booleans. Obtain true as result depends on probability class prop.
   * More closer to 1, is more likely to obtain false as outcome
   * @returns {boolean} ramdom boolean
   */
  private generateBoolean(): boolean {
    return Math.random() < this.probability;
  }

  /**
   * Determine if all booleans of a gamble are true
   * @param gamble represents player's gamble
   * @returns true if it's a winning gamble
   */
  private isWinningGamble(gamble: GambleModel): boolean {
    return gamble.some((move) => move === false);
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
