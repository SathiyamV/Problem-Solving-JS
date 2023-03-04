class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

const a = new Node (10);
const b = new Node (20);
const c = new Node (30);
const d = new Node (40);
a.next = b;
b.next = c;
c.next = d;

//iterative

function printvalue (head){
    var values=0;
    let current = head;
    while(current != null){
        values=values + current.val;
        // console.log(current.val);
        current = current.next;
    }
    return values
}

let value = printvalue(a);
console.log(value);
