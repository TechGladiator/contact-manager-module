/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'contacts.Model'
    ],
    stores: [
        'contacts.Store'
    ],
    views: [
        'main.Main',
        'import.ContactsImportPanel',
        'contacts.FieldMatcher',
        'contacts.SummaryPanel',
        'contacts.ListPanel',
        'contacts.ContactPanel',
        'contacts.ListPanelNarrow'
    ],
    name: 'ContactManagerModule',
    title: 'Contact Manager Module',

    launch: function() {
        Ext.create('ContactManagerModule.view.main.Main');
    }

});
