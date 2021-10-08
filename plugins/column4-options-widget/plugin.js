'use strict';
(function () {
  CKEDITOR.plugins.add('column4-options-widget', {
    requires: 'widget',
    icons: 'column4-options-widget',
    init: function (editor) {
      // Register the editing dialog.
      CKEDITOR.dialog.add('column4-options-widget', this.path + 'dialogs/column4-options-widget.js');
      editor.addContentsCss(this.path + 'css/column4-options-widget.css');
      editor.ui.addButton('column4-options-widget', {
        label: 'Insert Columns with options',
        icon: this.path + 'icons/column4-options-widget.png',
        command: 'column4-options-widget'
      });

      editor.widgets.add('column4-options-widget', {
        template: '<div class="widget-column-options widget-columns-4 align-equal my-6">' +
        '<div class="widget--md--grid">' +
        '<div class="widget-region-one first-child--mt-0"><p>sample content</p></div>' +
        '<div class="widget-region-two first-child--mt-0"><p>sample content</p></div>' +
        '<div class="widget-region-three first-child--mt-0"><p>sample content</p></div>' +
        '<div class="widget-region-four first-child--mt-0"><p>sample content</p></div>' +
        '</div>',
        allowedContent: 'div(!widget-column-options,!widget-columns-3,!align-*,my-*,widget-keylines,widget-gap-wide);' +
        'div(!widget--md--grid);' +
        'div(!widget-region-one,first-child-*);' +
        'div(!widget-region-two,first-child-*);' +
        'div(!widget-region-three,first-child-*);' +
        'div(!widget-region-four,first-child-*);',
        requiredContent: 'div(widget-column-options)',
        editables: {
          col1: {
            selector: '.widget-region-one'
          },
          col2: {
            selector: '.widget-region-two'
          },
          col3: {
            selector: '.widget-region-three'
          },
          col4: {
            selector: '.widget-region-four'
          },
        },

        button: 'Add four columns with options',
        dialog: 'column4-options-widget',

        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-columns-4');
        },

        init: function () {
          if (this.element.hasClass('my-4'))
            this.setData('margin', 'my-4');
          if (this.element.hasClass('my-6'))
            this.setData('margin', 'my-6');
          if (this.element.hasClass('my-12'))
            this.setData('margin', 'my-12');
          if (this.element.hasClass('my-16'))
            this.setData('margin', 'my-16');
          if (this.element.hasClass('widget-keylines'))
            this.setData('keylines', 'checked');
          if (this.element.hasClass('widget-gap-wide'))
            this.setData('gap', 'checked');
        },

        data: function () {
          this.element.removeClass('my-4');
          this.element.removeClass('my-6');
          this.element.removeClass('my-12');
          this.element.removeClass('my-16');

          this.element.removeClass('widget-keylines');

          this.element.removeClass('widget-gap-wide');

          if (this.data.margin)
            this.element.addClass(this.data.margin);

          if (this.data.keylines)
            this.element.addClass('widget-keylines');

          if (this.data.gap)
            this.element.addClass('widget-gap-wide');

        }
      });
    }
  });
})(jQuery);
