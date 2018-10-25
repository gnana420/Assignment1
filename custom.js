
const filterMixin = className =>

    class extends className {

        showBreifData(element = document.getElementsByClassName('list-items')[0].children[0]) {

            const ele = document.getElementById('allData').children;

            const a = element.getElementsByTagName('img')[0].src == "" || element.getElementsByTagName('img')[0].src == "#" ? "images/default.png" : element.getElementsByTagName('img')[0].src;

            const b = `<b>Title : </b> ${element.children[1].getElementsByTagName('h1')[0].innerHTML}`;

            const c = `<b>Description </b>: ${element.children[1].getElementsByTagName('p')[0].innerHTML}`;

            const d = element.children[1].getElementsByTagName('span')[0].innerHTML;

            const e = element.children[1].getElementsByTagName('label')[0].innerHTML;

            [ele[0].src, ele[1].children[0].innerHTML, ele[1].children[3].innerHTML, ele[1].children[2].innerHTML, ele[1].children[1].innerHTML] = [a, b, c, d, e];

        }

    }

class Ui {

    addClass(...index) {

        const [i, ...e] = [...index];

        i.setAttribute('class', 'activeList')

    }

    removeClass() {

        for (let i = 0; i < lists.length; i++) {

            lists[i].removeAttribute('class');

        }

    }

}

class SearchFilter extends filterMixin(Ui) {

    filterData(e = { target: document.getElementById('searchBar') }) {

        const txt = e.target.value.toLowerCase().trim();

        const listItem = document.getElementsByClassName('list-items')[0].children;

        if (txt != "") {

            for (let i = 0; i < listItem.length; i++) {

                const title = listItem[i].getAttribute('data-title').toLowerCase();

                if (title.indexOf(txt) > -1) {

                    listItem[i].style.display = "block";

                    this.showBreifData(listItem[i]);

                }

                else {

                    listItem[i].style.display = "none";

                }

            }

        }

        else {

            this.showBreifData();

            for (let i = 0; i < listItem.length; i++) {

                listItem[i].style.display = "block";

            }

        }

    }

}

const search = new SearchFilter();

search.showBreifData();

const filterList = e => {

    search.filterData(e);

}

const filterSubmit = e => {

    search.filterData();

    return false;

}

const lists = document.getElementsByClassName('list-items')[0].children;

for (let i = 0; i < lists.length; i++) {

    lists[i].addEventListener('click', (e) => {

        search.showBreifData(e.currentTarget);

        search.removeClass();

        search.addClass(e.currentTarget, 1, 2, 3, 4, 5, 6);

    });

}