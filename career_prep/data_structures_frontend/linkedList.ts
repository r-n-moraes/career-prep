/* -> ListNode<T>: Esta classe representa um nó na lista ligada. 
   Cada nó tem um valor (value) e uma referência ao próximo nó (next), 
   que pode ser null se o nó for o último da lista.
-> LinkedList<T>: Esta classe representa a lista ligada em si. 
   Ela tem um ponteiro para o nó inicial (head), que é null se a lista estiver vazia.
-> isEmpty(): Este método retorna true se a lista estiver vazia (ou seja, se head for null),
   e false caso contrário.
 -> add(value: T): Este método adiciona um novo nó com o valor fornecido ao final da lista. 
   Se a lista estiver vazia, o novo nó se torna o head. Caso contrário, o método percorre a lista até encontrar o último nó e adiciona o novo nó lá.
 -> print(): Este método percorre a lista e imprime o valor de cada nó. */
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  add(value: T): void {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Exemplo de uso
const list = new LinkedList<number>();
console.log("A lista está vazia?", list.isEmpty()); // true

list.add(1);
list.add(2);
list.add(3);

console.log("A lista está vazia?", list.isEmpty()); // false

list.print(); // 1, 2, 3
