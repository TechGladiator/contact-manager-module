/*
 * File: app/view/contacts/FieldMatcher.js
 *
 * This file was generated by Sencha Architect version 4.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ContactManagerModule.view.contacts.FieldMatcher', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contacts.fieldmatcher',

    requires: [
        'ContactManagerModule.view.contacts.FieldMatcherViewModel',
        'Ext.panel.Panel'
    ],

    viewModel: {
        type: 'contacts.fieldmatcher'
    },
    layout: 'vbox',
    title: 'Import Contacts from .CSV/.XLS file',

    items: [
        {
            xtype: 'panel',
            html: '<p style="font-size: 20px;">Match the file fields to template fields</p>',
            margin: 10,
            padding: '0 5'
        }
    ]

});