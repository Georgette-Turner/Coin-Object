let coin = {
    state: 0,
    flip: function() {
        
        if (Math.random() * 100 < 50) {
            this.state = 1
        } else {
            this.state = 0
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 0) {
            return 'Heads'
        }
        if (this.state === 1) {
            return 'Tails'
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};



coin.flip()
console.log(coin.toString())



function display20Flips(coinFlip) {
    // 
    
  
}

function display20Images (){
    // using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).

}