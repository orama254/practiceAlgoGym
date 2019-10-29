var reverseLinkedList = function(linkedlist) {
    var node = linkedlist;
    var previous = null;

    while (node) {
        //saves the next node
        var save = node.next;
        //applies a reverse to the pointer
        node.next = previous;
        //increments the previous node to the current node
        previous = node;
        //increments the node to the next node or a null at the end of the list
        node = save;
    }
    return previous; //changes the list head
}
linkedlist = reverseLinkedList(linkedlist);