//Переменная с присвоенным массивом

const directors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

//Тут я пыталась добавить заголовок через JS, но он добавляется вниз страницы

/*const heading = document.createElement('h1');
heading.textContent = 'Мои любимые режиссеры';
document.body.appendChild(heading);*/

//Установка фона

document.body.style.background =
    'url(https://foni.club/uploads/posts/2023-02/1675355584_foni-club-p-fon-zadnii-popkorn-30.jpg)';


// Создание элемента списка

const filmsListElement = document.createElement('ul');

//Функция с методом forEach и созданием DOM-элементов

directors.forEach((director) => {
    // создание элементов DOM
    const directorElement = document.createElement('div');
    const nameElement = document.createElement('h3');
    const careerElement = document.createElement('p');
    const filmsElement = document.createElement('a');

    // заполнение элементов информацией
    nameElement.textContent = director.name;
    careerElement.textContent = director.career;
    filmsElement.href = director.films;
    filmsElement.textContent = 'Фильмография';

    // добавление элементов в DOM
    directorElement.appendChild(nameElement);
    directorElement.appendChild(careerElement);
    directorElement.appendChild(filmsElement).setAttribute('style', 'margin-left: 500px;');

    document.getElementById('directorsList').appendChild(directorElement);

    //Добавление названия лучшего фильма в массив topFilmsList
    const topFilmElement = document.createElement('div');
    topFilmElement.textContent = director.top_rated_film;
    filmsListElement.appendChild(topFilmElement);

});

document.getElementById('directorsList').appendChild(filmsListElement);
