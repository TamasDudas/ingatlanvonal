<?php

return [
    'required' => 'A(z) :attribute mező kitöltése kötelező.',
    'string' => 'A(z) :attribute mezőnek szövegnek kell lennie.',
    'regex' => 'A(z) :attribute formátuma érvénytelen.',
    'required_without' => 'A(z) :attribute megadása kötelező, ha nem választottál :values mezőt.',

    'attributes' => [
        'street' => 'utca',
        'city_id' => 'város',
        'city_name' => 'város név',
        'rental_price' => 'bérleti díj',
        'size' => 'méret',
        'short_description' => 'rövid leírás',
    ],

    // Egyedi üzenetek a város validációhoz
    'custom' => [
        'city_id' => [
            'required_without' => 'Válassz egy várost a listából vagy adj meg egy új város nevet.',
        ],
        'city_name' => [
            'required_without' => 'Add meg az új város nevét vagy válassz egyet a listából.',
        ],
    ],
];
