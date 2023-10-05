<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
    die();
}

use \Bitrix\Main\Localization\Loc;

return array(
    'block' => array(
        'name' => "Текст в две колонки",
        'section' => array('columns', 'text'),
    ),
    'cards' => array(
        '.landing-block-card' => array(
            'name' => "Колонка",
            'label' => array(
                '.landing-block-node-subtitle',
                '.landing-block-node-title',
            ),
        ),
    ),
    'nodes' => array(
        '.landing-block-node-title' => array(
            'name' => "Заголовок",
            'type' => 'text',
        ),
        '.landing-block-node-text' => array(
            'name' => "Текст",
            'type' => 'text',
        ),
    ),
    'style' => array(
        'block' => array(
            'block-default',
        ),
        'nodes' => array(
            '.landing-block-card' => array(
                'name' => "Колонка",
                'type' => array('columns', 'animation'),
            ),
            '.landing-block-node-title' => array(
                'name' => "Заголовок",
                'type' => 'typo',
            ),
            '.landing-block-node-text' => array(
                'name' => "Текст",
                'type' => 'typo',
            ),
            '.landing-block-node-card-header' => array(
                'name' => "Заголовок",
                'type' => 'border-color',
            ),
        ),
    ),
    'attrs' => array(
        '.landing-block-node-text' => array(
            'name' => 'Настройка текст',
            'type' => 'dropdown',
            'attribute' => 'data-copy',
            'items' => array(
                'val1' => 'Значение 1',
                'val2' => 'Значение 2',
            ),
        ),
    ),
    
    'assets' => array(
        'css' => array(
            'https://site.com/aaa.css',
        ),
        'js' => array(
            'https://site.com/aaa.js',
        ),
        'ext' => array(
            'landing_form',
        ),
    ),
);
?>