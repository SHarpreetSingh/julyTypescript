#include <bits/stdc++.h>
#include <list>

using namespace std;

int main() {
    list<int> l;
    cout << "l.size() " << l.size() <<endl;
    // it doesnot have capacity

    l.push_back(1);
    cout << "l.size() " << l.size() <<endl;

    l.push_front(2);
    cout << "l.size() " << l.size() <<endl;
    l.erase(l.begin()); // deleting

     for(auto i:l){
        cout<<i<<" logg "<<endl;
    }cout<<endl;

    // list<int> n(l); // copy list l to n

    list<int> n(5,100); // 
    for(auto i:n) {
        cout<<i<<" logg N "<<endl;
    }cout<<endl;
}