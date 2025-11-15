#include <iostream>
#include <string>
#include <stdexcept>
using namespace std;

class LibraryItem {
private:
    string title;
    string author;
    string dueDate;

public:

    void setTitle(string newTitle) {
         title = newTitle; 
    }
    void setAuthor(string newAuthor) {
         author = newAuthor;
    }
    void setDueDate(string newDueDate) { 
        dueDate = newDueDate; 
    }

    string getTitle() const {
         return title; 
    }
    string getAuthor() const {
         return author; 
    }
    string getDueDate() const {
         return dueDate; 
    }


    virtual void checkOut() = 0;
    virtual void returnItem() = 0;
    virtual void displayDetails() const = 0;

    virtual ~LibraryItem() {}
};

class Book : public LibraryItem {
private:
    string ISBN;

public:
    void setISBN(string newISBN) {
      ISBN = newISBN;
    }

    string getISBN() const { return ISBN; }

    void checkOut() override {
        string date;
        cout << "Enter due date for Book: ";
        cin >> date;
        setDueDate(date);
        cout << "Book checked out successfully!\n";
    }

    void returnItem() override {
        cout << "Book returned successfully!\n";
        setDueDate("");
    }

    void displayDetails() const override {
        cout << "\n BOOK DETAILS \n";
        cout << "Title: " << getTitle() << endl;
        cout << "Author: " << getAuthor() << endl;
        cout << "ISBN: " << ISBN << endl;
        if (getDueDate() == "")
            cout << "Status: Available\n";
        else
            cout << "Due Date: " << getDueDate() << endl;
    }
};

class DVD : public LibraryItem {
private:
    int duration; 

public:
    void setDuration(int d) {
        if (d <= 0)
            throw invalid_argument("Duration must be positive!");
        duration = d;
    }

    int getDuration() const { return duration; }

    void checkOut() override {
        string date;
        cout << "Enter due date for DVD: ";
        cin >> date;
        setDueDate(date);
        cout << "DVD checked out successfully!\n";
    }

    void returnItem() override {
        cout << "DVD returned successfully!\n";
        setDueDate("");
    }

    void displayDetails() const override {
        cout << "\n DVD DETAILS\n";
        cout << "Title: " << getTitle() << endl;
        cout << "Producer: " << getAuthor() << endl;
        cout << "Duration: " << duration << " minutes\n";
        if (getDueDate() == "")
            cout << "Status: Available\n";
        else
            cout << "Due Date: " << getDueDate() << endl;
    }
};


class Magazine : public LibraryItem {
private:
    int issueNumber;

public:
    void setIssueNumber(int i) {
        if (i <= 0)
            throw invalid_argument("Issue number must be positive!");
        issueNumber = i;
    }

    int getIssueNumber() const { return issueNumber; }

    void checkOut() override {
        string date;
        cout << "Enter due date for Magazine: ";
        cin >> date;
        setDueDate(date);
        cout << "Magazine checked out successfully!\n";
    }

    void returnItem() override {
        cout << "Magazine returned successfully!\n";
        setDueDate("");
    }

    void displayDetails() const override {
        cout << "\n MAGAZINE DETAILS\n";
        cout << "Title: " << getTitle() << endl;
        cout << "Publisher: " << getAuthor() << endl;
        cout << "Issue No.: " << issueNumber << endl;
        if (getDueDate() == "")
            cout << "Status: Available\n";
        else
            cout << "Due Date: " << getDueDate() << endl;
    }
};


int main() {
    const int MAX_ITEMS = 10;
    LibraryItem* libraryItems[MAX_ITEMS];
    int count = 0;
    int choice;

    do {
        cout << "\n===== LIBRARY MANAGEMENT SYSTEM =====\n";
        cout << "1. Add Book\n";
        cout << "2. Add DVD\n";
        cout << "3. Add Magazine\n";
        cout << "4. Display All Items\n";
        cout << "5. Check Out Item\n";
        cout << "6. Return Item\n";
        cout << "7. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        try {
            if (choice == 1) {
                if (count >= MAX_ITEMS) {
                    cout << "Library is full!\n";
                    continue;
                }
                Book* b = new Book();
                string t, a, isbn;
                cout << "Enter Book Title: ";
                cin >> ws;
                getline(cin, t);
                cout << "Enter Author: ";
                getline(cin, a);
                cout << "Enter ISBN: ";
                getline(cin, isbn);

                b->setTitle(t);
                b->setAuthor(a);
                b->setISBN(isbn);
                libraryItems[count++] = b;
                cout << "Book added successfully!\n";
            }

            else if (choice == 2) {
                if (count >= MAX_ITEMS) {
                    cout << "Library is full!\n";
                    continue;
                }
                DVD* d = new DVD();
                string t, a;
                int dur;
                cout << "Enter DVD Title: ";
                cin >> ws;
                getline(cin, t);
                cout << "Enter Producer: ";
                getline(cin, a);
                cout << "Enter Duration (in minutes): ";
                cin >> dur;

                d->setTitle(t);
                d->setAuthor(a);
                d->setDuration(dur);
                libraryItems[count++] = d;
                cout << "DVD added successfully!\n";
            }

            else if (choice == 3) {
                if (count >= MAX_ITEMS) {
                    cout << "Library is full!\n";
                    continue;
                }
                Magazine* m = new Magazine();
                string t, a;
                int issue;
                cout << "Enter Magazine Title: ";
                cin >> ws;
                getline(cin, t);
                cout << "Enter Publisher: ";
                getline(cin, a);
                cout << "Enter Issue Number: ";
                cin >> issue;

                m->setTitle(t);
                m->setAuthor(a);
                m->setIssueNumber(issue);
                libraryItems[count++] = m;
                cout << "Magazine added successfully!\n";
            }

            else if (choice == 4) {
                if (count == 0)
                    cout << "No items in the library yet.\n";
                else {
                    cout << "\n---- Library Items ----\n";
                    for (int i = 0; i < count; i++) {
                        cout << i + 1 << ". ";
                        libraryItems[i]->displayDetails();
                    }
                }
            }

            else if (choice == 5) {
                int n;
                cout << "Enter item number to Check Out: ";
                cin >> n;
                if (n > 0 && n <= count)
                    libraryItems[n - 1]->checkOut();
                else
                    cout << "Invalid item number!\n";
            }

            else if (choice == 6) {
                int n;
                cout << "Enter item number to Return: ";
                cin >> n;
                if (n > 0 && n <= count)
                    libraryItems[n - 1]->returnItem();
                else
                    cout << "Invalid item number!\n";
            }

            else if (choice == 7) {
                cout << "Exiting program... Thank you!\n";
            }

            else {
                cout << "Invalid choice! Try again.\n";
            }

        } catch (const exception& e) {
            cout << "Error: " << e.what() << endl;
            cin.clear();
            cin.ignore(10000, '\n');
        }

    } while (choice != 7);

    for (int i = 0; i < count; i++)
        delete libraryItems[i];

    return 0;
}