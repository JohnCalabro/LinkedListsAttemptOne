/** Node: node for a singly linked list. */

// I'm completely lost. Can barely answer these. Have no time to do this now
//will try again after the course ends. Will turn in now, will revisit later on
//OOP is an area of weakness for me at the momemnt.


class Node {
  constructor(val) {    //pass in 'blue'
    this.val = val;     //'blue'
    this.next = null;   // null
  }
}

//new Node example for reference:

// Node {val: 'blue', next: null}
// next
// : 
// null
// val
// : 
// "blue"



/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {    //from solution, gets idx position. This is not clicking
    //trying to understand... this should help me get idx when needed, need
    //to save time here. 
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** push(val): add new value to end of list. */

  push(val) {   
    const newNode = new Node(val)
    console.log(newNode)
     if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            console.log('START', this.head)
            console.log('END', this.tail)
        }
        this.tail.next = newNode;
        this.tail = newNode;
        
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {    
    const newNode = new Node(val)
     if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
       this.head = newNode;

  }

  /** pop(): return & remove last item. */

  pop(idx) {     
  


  }


  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {


  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;
    let tot = 0;
    let cur = this.head;

    while(cur) {
      tot += cur.val;
      cur = cur.next   //cur becomes next 

    }
    return tot/this.length  //getting NaN , something wrong above.
    //this is confusing, this func is from solution, makes some sense
    //want to spend time on this later after course. 
  }
}

module.exports = LinkedList;
