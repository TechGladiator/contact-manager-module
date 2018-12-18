/*
 * File: app/view/contacts/GridPanel.js
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

Ext.define('ContactManagerModule.view.contacts.GridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contacts.gridpanel',

    requires: [
        'ContactManagerModule.view.contacts.GridPanelViewModel',
        'Ext.view.Table',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'contacts.gridpanel'
    },

    bind: {
        store: '{contacts.Models}'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'title',
            text: 'Title'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'first_name',
            text: 'First Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'middle_name',
            text: 'Middle Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'last_name',
            text: 'Last Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'suffix',
            text: 'Suffix'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'gender',
            text: 'Gender'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'home_phone',
            text: 'Home Phone'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'mobile_phone',
            text: 'Mobile Phone'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'personal_email',
            text: 'Personal Email'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'home_street',
            text: 'Home Street'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'home_city',
            text: 'Home City'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'home_state',
            text: 'Home State'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'home_postal_code',
            text: 'Home Postal Code'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'home_country',
            text: 'Home Country'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_name',
            text: 'Company Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_phone',
            text: 'Company Phone'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_email',
            text: 'Company Email'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_street',
            text: 'Company Street'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_city',
            text: 'Company City'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_state',
            text: 'Company State'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_postal_code',
            text: 'Company Postal Code'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'company_country',
            text: 'Company Country'
        }
    ]

});