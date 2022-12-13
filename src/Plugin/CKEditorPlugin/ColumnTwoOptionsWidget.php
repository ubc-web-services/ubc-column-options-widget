<?php

namespace Drupal\ubc_column_options_widget\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "column-two-options-widget" plugin.
 *
 * @CKEditorPlugin(
 *   id = "column-two-options-widget",
 *   label = @Translation("Columns with Options Widget"),
 *   module = "ubc_column_options_widget"
 * )
 */
class ColumnTwoOptionsWidget extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return \Drupal::service('extension.list.module')->getPath('ubc_column_options_widget') . '/plugins/column-two-options-widget/plugin.js';
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
      'column-two-options-widget' => [
        'label' => $this->t('Columns with options Widget'),
        'image' => \Drupal::service('extension.list.module')->getPath('ubc_column_options_widget') . '/plugins/column-two-options-widget/icons/column-two-options-widget.png',
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
