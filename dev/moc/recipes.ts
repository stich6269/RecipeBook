import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredients";

export let RECIPES: Recipe[] = [
    new Recipe('Тюря на квасе', 'http://www.povarenok.ru/data/cache/2016jul/07/56/1636628_71009-300x0.jpg',
        'Описание: Тюря-исконно русское блюдо. Еда бедняков. Отличная замена окрошки в жару. ' +
        'С хреном, чесноком и зеленью, со свеже-сделанными сухариками из ржаного хлеба и всё это ' +
        'залито квасом ОЧАКОВО. До чего же вкусно и отлично утоляет голод.',
        [
            new Ingredient('Квас', 0.5),
            new Ingredient('Хлеб', 2),
            new Ingredient('Чеснок', 2),
            new Ingredient('Зелень', 0.5),
            new Ingredient('Хрен', 1),
            new Ingredient('Соль', 1)
        ]
    ),

    new Recipe('Альпийский виноград', 'http://www.povarenok.ru/data/cache/2016jul/07/23/1636599_60996-300x0.jpg',
    'Описание: Тюря-исконно русское блюдо. Еда бедняков. Отличная замена окрошки в жару. ' +
    'С хреном, чесноком и зеленью, со свеже-сделанными сухариками из ржаного хлеба и всё это ' +
    'залито квасом ОЧАКОВО. До чего же вкусно и отлично утоляет голод.',
    [
        new Ingredient('Творог	', 300),
        new Ingredient('Йогурт', 1),
        new Ingredient('Виноград', 100),
        new Ingredient('Шоколад темный', 100),
        new Ingredient('Желатин', 20),
        new Ingredient('Сахар', 6)
    ]
),


];