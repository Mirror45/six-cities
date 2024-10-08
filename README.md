# Добро пожаловать в Six Cities 🎉

Данный сервис позволяет пользователю подобрать отель для отпуска в одном из шести европейских городов. Есть возможность взаимодействовать с картой, просматривать и оставлять отзывы а также добавлять в "Избранное" понравившиеся варианты.

## Функционал проекта 💡

### Главный экран

- На карте предложения отображаются в виде синих маркеров.
- При наведении на отель - он подсвечивается на карте оранжевым маркером
- В заголовке отображается суммарное количество предложений в выбранном городе
- Пользователь может менять сортировку списка предложений. Варианты сортировки:
    + _Popular_. Вариант по умолчанию. Предложения отображаются в порядке, полученном с сервера.
    + _Price: low to high_. От дорогих к дешёвым.
    + _Price: high to low_. От дешёвых к дорогим.
    + _Top rated first_. От высокого рейтинга к низкому.
- Клик по карточке выполняет переход на страницу с подробной информацией о предложении.

### Страница предложения

- Клик по кнопке «Избранное» добавляет карточку в избранное. Если пользователь не авторизован, то выполняется переадресация на страницу Авторизации.
- В заголовке блока с отзывами отображается общее количество оставленных отзывов.
- Для авторизированных пользователей отображается форма отправки нового отзыва.
- На страницу выводится не больше 10 отзывов
- Отзывы сортируются от новых к старым
- Под отзывами размещены карточки предложений неподалеку. Наведение на предложение также подсвечивает соответствующий маркер на карте.

### Отправка отзыва

- Форма отправки отзыва находится на странице предложения и отображается только авторизованным пользователям
- Пользователь может выставить рейтинг от 1 до 5 и написать текст
- Для отправки отзыва длинна текста не должна превышать 300 символов и быть не меньше 50 символов.
- Если пользователь ввёл допустимое кол-во символов и выбрал оценку то кнопка отправка активируется

### Страница авторизации

- Страница доступна только неавторизованным пользователям. Авторизованных пользователей перенаправляет на главную страницу
- Для входа требуется в качестве логина ввести любой корректный e-mail и любой пароль поскольку у удаленного сервера отсутствует возможность регистрации

### Список избранных предложений

- Страница доступна только авторизованным пользователям. Неавторизованные пользователи перенаправляются на страницу Авторизации.
- Все добавленные пользователем в избранные отели попадают в данный список
- Пользователь может удалять отели из списка кликнув по синему флажку
- Клик по карточке отеля выполняет переход на страницу предложения с детальным описанием выбранного места

### Взаимодействие c API

- На сайте предусмотрена авторизация
- Неавторизованные пользователи имеют ограниченный функционал приложения
- Все данные о отелях приложение получает с удалённого сервера
- При отправке отзыва приложение взаимодействует с сервером
- Добавление / удаление отелей из списка "Избранное" также напрямую взаимодействует с сервером

## Стек технологий 🤖 

- Проект полностью написан на **TypeScript**
- Сборка и работа dev-сервера обеспечивается с помощью **CRA**
- Для работы карты используется пакет [**Leaflet**](https://leafletjs.com)
- Работу со всеми сетевыми запросами производим через пакет **Axios**
- Для работы с основным хранилищем используется **Redux**
- Пакет **React-Router-Dom** отвечает за роутинг на приложении

## Установка 🛠

1. Сначала требуется склонировать проект на ваш пк

```
  git clone git@github.com:Mirror45/six-cities.git
```

2. Переходим в только что склонированный репозиторий

```
 cd six-citie
```

3. Устанавливаем все зависимости

```
 npm i
```

4. Запускаем проект на локальном хосте

```
 npm start
```
