<?php

namespace Drupal\ubc_column_options_widget\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "column-four-options-widget" plugin.
 *
 * @CKEditorPlugin(
 *   id = "column-four-options-widget",
 *   label = @Translation("4 Columns with Options Widget"),
 *   module = "ubc_column_options_widget"
 * )
 */
class ColumnFourOptionsWidget extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_column_options_widget') . '/plugins/column-four-options-widget/plugin.js';
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
      'column-four-options-widget' => [
        'label' => $this->t('4 Columns with options Widget'),
        'image' => drupal_get_path('module', 'ubc_column_options_widget') . '/plugins/column-four-options-widget/icons/column-four-options-widget.png',
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
