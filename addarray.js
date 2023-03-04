class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

const a = new Node ("A");
const b = new Node ("B");
const c = new Node ("C");
const d = new Node ("D");
a.next = b;
b.next = c;
c.next = d;

//iterative

function printvalue (head){
    var values=[];
    let current = head;
    while(current != null){
        values.push(current.val);
        // console.log(current.val);
        current = current.next;
    }
    return values
}

let value = printvalue(a);
console.log(value);
