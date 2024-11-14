#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int data;
    Node *next;
    Node *prev;

    Node(int val)
    {
        data = val;
        next = NULL;
        prev = NULL;
    }
};

Node *constructDLL(vector<int> &arr) {
    // code here
    Node *head = new Node(arr[0]);
    Node *start = head;

    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i]);

        head->next = temp;
        temp->prev = head;

        head = temp;
    }

    return start;
}

int main(void) {
    vector<int> arr = {1, 2, 3, 4, 5};
    Node *head = constructDLL(arr);

    while (head != NULL)
    {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
    return 0;
}