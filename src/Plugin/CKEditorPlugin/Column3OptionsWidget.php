<?php

namespace Drupal\ubc_column_options_widget\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "column3-options-widget" plugin.
 *
 * @CKEditorPlugin(
 *   id = "column3-options-widget",
 *   label = @Translation("3 Columns with Options Widget"),
 *   module = "ubc_column_options_widget"
 * )
 */
class Column3OptionsWidget extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_column_options_widget') . '/plugins/column3-options-widget/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [
      'column3-options-widget' => [
        'label' => $this->t('3 Columns with options Widget'),
        'image' => drupal_get_path('module', 'ubc_column_options_widget') . '/plugins/column3-options-widget/icons/column3-options-widget.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
