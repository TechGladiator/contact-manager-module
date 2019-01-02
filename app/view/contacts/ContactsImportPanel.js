/*
 * File: app/view/contacts/ContactsImportPanel.js
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

Ext.define('ContactManagerModule.view.contacts.ContactsImportPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contacts.contactsimportpanel',

    requires: [
        'ContactManagerModule.view.contacts.ContactsImportPanelViewModel',
        'Ext.panel.Panel',
        'Ext.form.field.File',
        'Ext.Img'
    ],

    viewModel: {
        type: 'contacts.contactsimportpanel'
    },
    frame: true,
    id: 'contactsImportPanel',
    minHeight: 200,
    title: 'Import Contacts and Organizations',
    titleAlign: 'center',
    defaultListenerScope: true,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            flex: 1,
            frame: true,
            margin: '25 0 25 25',
            minHeight: 190,
            title: 'Contact CSV or XLS File Import',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    id: 'dragNDrop',
                    margin: '5 0',
                    width: '80%',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            flex: 1,
                            html: '<div style="border: 2px dashed #bbb;border-radius: 5px;padding: 25px;text-align: center;font: 20pt bold;color: #bbb;">Drag and Drop File here</div>',
                            width: 334
                        }
                    ]
                },
                {
                    xtype: 'filefield',
                    id: 'contactFileUpload',
                    width: '80%',
                    accept: '.csv, .xls, .xlsx',
                    listeners: {
                        change: 'onContactFileUploadChange'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            frame: true,
            margin: 25,
            minHeight: 190,
            title: 'Cloud Import',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'image',
                    flex: 1,
                    margin: 25,
                    width: 201,
                    src: '/img/gmail.png'
                },
                {
                    xtype: 'image',
                    flex: 1,
                    margin: 25,
                    width: 201,
                    src: '/img/icloud.png'
                },
                {
                    xtype: 'image',
                    flex: 1,
                    margin: 25,
                    width: 201,
                    src: '/img/office365.png'
                }
            ]
        },
        {
            xtype: 'panel',
            flex: 1,
            frame: true,
            margin: '25 25 25 0',
            minHeight: 190,
            title: 'Organization CSV or XLS File Import',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    id: 'dragNDrop1',
                    margin: '5 0',
                    width: '80%',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            flex: 1,
                            html: '<div style="border: 2px dashed #bbb;border-radius: 5px;padding: 25px;text-align: center;font: 20pt bold;color: #bbb;">Drag and Drop File here</div>',
                            width: 334
                        }
                    ]
                },
                {
                    xtype: 'filefield',
                    id: 'orgFileUpload',
                    width: '80%',
                    listeners: {
                        change: 'onOrgFileUploadChange'
                    }
                }
            ]
        }
    ],

    onContactFileUploadChange: function(filefield, value, eOpts) {
        this.fakePathRemover('contactFileUpload-inputEl', value);
    },

    onOrgFileUploadChange: function(filefield, value, eOpts) {
        this.fakePathRemover('orgFileUpload-inputEl', value);
    },

    fakePathRemover: function(id, value) {
        value = value.substring(value.lastIndexOf("\\") + 1);
        if (value !== "") {
            document.getElementById(id).value = value;
        }
    }

});