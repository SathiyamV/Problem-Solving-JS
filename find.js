class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

//create 5 nodes  --> Apple , Mango , Grapes , Orange, Peach . 

const a = new Node ("Apple");
const b = new Node ("Mango");
const c = new Node ("Grapes");
const d = new Node ("Orange");
const e = new Node ("Peach");
a.next = b;
b.next = c;
c.next = d;
d.next = e;

//iterative

function printvalue (head,target){
    let current = head;
    while(current != null){
        if(target=current.val)return true;
        current = current.next;
    }
    return values
}

let value = printvalue(a,"Peach");
console.log(value);
