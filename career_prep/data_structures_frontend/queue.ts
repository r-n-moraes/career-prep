/* Classe Queue<T>:
-> private items: T[] = [];: Uma array privada que armazena os elementos da fila.
-> enqueue(element: T): void: Adiciona um elemento ao final da fila.
-> dequeue(): T | undefined: Remove e retorna o elemento do início da fila. 
Retorna undefined se a fila estiver vazia.
-> peek(): T | undefined: Retorna o elemento do início da fila sem removê-lo. 
Retorna undefined se a fila estiver vazia.
-> isEmpty(): boolean: Verifica se a fila está vazia.
-> size(): number: Retorna o tamanho da fila.
-> clear(): void: Limpa a fila, removendo todos os elementos. */
class Queue<T> {
  private items: T[] = [];

  // Adiciona um elemento ao final da fila
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Remove e retorna o elemento do início da fila
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Retorna o elemento do início da fila sem removê-lo
  peek(): T | undefined {
    return this.items[0];
  }

  // Verifica se a fila está vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Retorna o tamanho da fila
  size(): number {
    return this.items.length;
  }

  // Limpa a fila
  clear(): void {
    this.items = [];
  }
}

// Exemplo de uso
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Saída: 1
console.log(queue.peek()); // Saída: 2
console.log(queue.size()); // Saída: 2
console.log(queue.isEmpty()); // Saída: false

queue.clear();
console.log(queue.isEmpty()); // Saída: true
