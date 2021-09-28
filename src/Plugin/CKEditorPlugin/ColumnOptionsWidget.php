<?php

namespace Drupal\ubc_column_options_widget\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "column-options-widget" plugin.
 *
 * @CKEditorPlugin(
 *   id = "column-options-widget",
 *   label = @Translation("Columns with Options Widget"),
 *   module = "ubc_column_options_widget"
 * )
 */
class ColumnOptionsWidget extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_column_options_widget') . '/plugins/column-options-widget/plugin.js';
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
      'column-options-widget' => [
        'label' => $this->t('Columns with options Widget'),
        'image' => drupal_get_path('module', 'ubc_column_options_widget') . '/plugins/column-options-widget/icons/column-options-widget.png',
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
