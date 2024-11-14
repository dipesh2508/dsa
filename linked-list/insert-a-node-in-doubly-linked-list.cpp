#include <bits/stdc++.h>
using namespace std;

class Node
{
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

Node *addNode(Node *head, int pos, int data)
{
    // code here
    Node *node = new Node(data);
    Node *temp = head;

    int i = 0;

    while (i < pos && temp)
    {
        temp = temp->next;
        i++;
    }
    if (temp && temp->next)
    {
        temp->next->prev = node;
        node->next = temp->next;
        node->prev = temp;

        temp->next = node;
    }

    if (temp)
    {
        node->prev = temp;
        temp->next = node;
    }

    return head;
}

int main(void)
{
    vector<int> arr = {1, 2, 3, 4, 5};
    Node *head = new Node(arr[0]);
    Node *start = head;

    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i]);

        head->next = temp;
        temp->prev = head;

        head = temp;
    }

    head = start;
    head = addNode(head, 2, 10);

    while (head != NULL)
    {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
    return 0;
}