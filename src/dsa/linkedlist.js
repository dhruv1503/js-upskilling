function linkedlist(){
    let head = null
    let items = []
    let length = 0
    function Node(element){
        this.element = element;
        this.node = null;
    }

    this.append = function(element){
     // create a node 
     let node = new Node(element), current
     // check if head is present
     if(head === null){
      head = node
     }
    }

}


const ll1 = new linkedlist();

ll1.append(3);