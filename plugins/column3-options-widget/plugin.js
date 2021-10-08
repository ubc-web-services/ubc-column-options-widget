'use strict';
(function () {
  CKEDITOR.plugins.add('column3-options-widget', {
    requires: 'widget',
    icons: 'column3-options-widget',
    init: function (editor) {
      // Register the editing dialog.
      CKEDITOR.dialog.add('column3-options-widget', this.path + 'dialogs/column3-options-widget.js');
      editor.addContentsCss(this.path + 'css/column3-options-widget.css');
      editor.ui.addButton('column3-options-widget', {
        label: 'Insert Columns with options',
        icon: this.path + 'icons/column3-options-widget.png',
        command: 'column3-options-widget'
      });

      editor.widgets.add('column3-options-widget', {
        template: '<div class="widget-column-options widget-columns-3 align-equal my-6">' +
        '<div class="widget--md--grid">' +
        '<div class="widget-region-one first-child--mt-0"><p>sample content</p></div>' +
        '<div class="widget-region-two first-child--mt-0"><p>sample content</p></div>' +
        '<div class="widget-region-three first-child--mt-0"><p>sample content</p></div>' +
        '</div>',
        allowedContent: 'div(!widget-column-options,!widget-columns-3,!align-*,my-*,widget-keylines,widget-gap-wide);' +
        'div(!widget--md--grid);' +
        'div(!widget-region-one,first-child-*);' +
        'div(!widget-region-two,first-child-*);' +
        'div(!widget-region-three,first-child-*);',
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
        },

        button: 'Add three columns with options',
        dialog: 'column3-options-widget',

        upcast: function (element) {
          return element.name == 'div' && element.hasClass('widget-columns-3');
        },

        init: function () {
          if (this.element.hasClass('align-equal'))
            this.setData('align', 'align-equal');
          if (this.element.hasClass('align-large-left'))
            this.setData('align', 'align-large-left');
          if (this.element.hasClass('align-large-center'))
            this.setData('align', 'align-large-center');
          if (this.element.hasClass('align-large-right'))
            this.setData('align', 'align-large-right');
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
          this.element.removeClass('align-equal');
          this.element.removeClass('align-large-left');
          this.element.removeClass('align-large-center');
          this.element.removeClass('align-large-right');

          this.element.removeClass('my-4');
          this.element.removeClass('my-6');
          this.element.removeClass('my-12');
          this.element.removeClass('my-16');

          this.element.removeClass('widget-keylines');

          this.element.removeClass('widget-gap-wide');

          if (this.data.align)
            this.element.addClass(this.data.align);

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
