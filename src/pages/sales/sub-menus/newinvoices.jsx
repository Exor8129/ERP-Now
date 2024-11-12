import React from 'react'
import "./invoice.css"

const invoiceData = {
    items: [
      {
        description: "Product A",
        hsnSac: "1234",
        tax: "18%",
        mrp: 500,
        qty: 2,
        rate: 250,
        discount: 10,
        amount: 500, // This could be calculated based on qty * rate - discount
        cgst: 45, // Example CGST
        sgst: 45, // Example SGST
      },
      {
        description: "Product B",
        hsnSac: "5678",
        tax: "12%",
        mrp: 300,
        qty: 1,
        rate: 250,
        discount: 5,
        amount: 250, // Similar logic as above
        cgst: 22.5,
        sgst: 22.5,
      },
      {
        description: "Product C",
        hsnSac: "91011",
        tax: "5%",
        mrp: 200,
        qty: 3,
        rate: 100,
        discount: 0,
        amount: 300,
        cgst: 15,
        sgst: 15,
      },
    ],
  };

  const sortedTaxRates = ["18", "12", "5"];  // List of tax rates (as strings)
const taxRateToHSNMapping = {
  "18": {
    hsnCodes: "1234, 5678",  // Example HSN/SAC codes
    totalAmounts: "1000",  // Example total amount (before tax)
  },
  "12": {
    hsnCodes: "91011, 11213",
    totalAmounts: "500",
  },
  "5": {
    hsnCodes: "1415, 1617",
    totalAmounts: "300",
  },
};

const NewInvoice = () => {
    return (
        <>
        <div className="invoice-main-container">
            <div className="invoice-a4-container">
        <div className='containerInvoice'>
          <div className='section1'>
            <div className='partyNamehead' >
              <strong>Party Name</strong>
              <h className="partyName"></h>
            </div>
            <div className='partyAddresshead'>
              <strong>Billing Address</strong>
              <h className="partyAddress"></h>
              <div className='phone'>
                <strong>Ph:</strong>
                <h></h>
              </div>
            </div>
          </div>
    
          {/* {isPopupOpen && (
            <div className="popup">
              <div className="popup-content" ref={popupRef}>
                <PartySelect
                  ref={partySelectRef}
                  onSelect={handlePartySelect}
                />
              </div>
            </div>
          )} */}
    
          <div className='section2'>
            <div className='gst'>
              <strong>GSTIN</strong>
              <h className="gstno"></h>
            </div>
            <div className='dlno'>
              <strong>DL No</strong>
              <h className="dl"></h>
            </div>
            <div className='ship' >
              <strong>Shipping Address</strong>
              <h className="shipadd"></h>
            </div>
          </div>
          {/* {isShippingPopupOpen && (
                <ShippingPopup
                    addresses={shippingAddresses}
                    onClose={closeShippingPopup}
                    onAddressSelect={handleAddressSelect}
                />
                )} */}
    
          <div className='section3'>
            <div className='invcNum'>
              <div className='invoiceNumber'>
                <strong>Invoice No.</strong>
                <h className="txttoppad">2463/24-25</h>
              </div>
              <div 
                className='invoiceDate' 
                // onClick={() => setIsDatePickerOpen(true)}
                // ref={invoiceDateRef}
              >
                <strong>Date</strong>
                <h className="txttoppad"></h>
              </div>
    
              {/* {isDatePickerOpen && (
                <div className="date-picker-container" ref={datePickerRef}>
                  <DatePicker
                    selected={invoiceDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    inline
                  />
                </div>
              )} */}
            </div>
    
            <div className='poNum'>
              <div className='poNumber' >
                <strong>P. Order No.</strong>
                <h className="txttoppad"></h> 
              </div>
              <div className='poDate'>
                <strong>PO Date</strong>
                <h className="txttoppad"></h>
              </div>
            </div>
    
            {/* {isPOPopupOpen && (
              <PPopup
              onClose={closePOPopup}
              poNumber={poNumber}
              poDate={poDate}
              onPOChange={handlePOChange}
              ref={popupRef}
              />
            )} */}
    
              
    
            <div className='state'>
              <div className='stateName'>
                <strong>State</strong>
                <h className="statename"></h>
              </div>
              <div className='stateCode'>
                <strong>Code</strong>
                <h className="code"></h>
              </div>
            </div>
    
            <div className='trans'>
              <strong>Transport</strong>
              <h className="courier"></h>
            </div>
            {/* {isTransPopupOpen && (
              <TPopup
                onClose={closeTransPopup}
                // transporterOptions={transporterOptions}
                onTransporterSelect={handleTransporterChange} // Updated handler
                ref={popupRef} // Ensure TPopup component supports ref
              />
            )} */}
    
          </div>
        </div>
        
        {/*Here Starts the table contents*/}
        
        <div className="itemTableheader">
      <div className="tableHead">
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th className="item-column" >
                Item Description
              </th>
              <th>HSN Code</th>
              <th>Tax</th>
              <th>MRP</th>
              <th className="qty-column">Qty</th>
              <th className="rate-column">Rate</th>
              <th>Disc</th>
              <th>Taxable Amount</th>
              <th>CGST</th>
              <th>SGST</th>
            </tr>
          </thead>
          <tbody className="item-table-body">
            {invoiceData.items.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => handleRowClick(rowIndex)} // Set row click handler
                className='selected-row' // Highlight selected row
              >
                <td>{rowIndex + 1}</td>
                <td className="item-col">{item.description}</td>
                <td>{item.hsnSac}</td>
                <td>{item.tax}</td>
                <td>{item.mrp}</td>
                <td className="qty-column">
                  <input className="input-field" type="number" value={item.qty} onChange={(e) => handleInputChange(e, rowIndex, 'qty')} />
                </td>
                <td className="rate-column">
                  <input className="input-field-Rate" type="number" value={item.rate} onChange={(e) => handleInputChange(e, rowIndex, 'rate')} />
                </td>
                <td>
                  <input className="input-field-disc" type="number" value={item.discount} onChange={(e) => handleInputChange(e, rowIndex, 'discount')} />
                </td>
                <td>{item.amount}</td>
                <td>{item.cgst}</td>
                <td>{item.sgst}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>

      

      {/* <FooterTable totalAmount={totals.totalAmount} totalCGST={totals.totalCGST} totalSGST={totals.totalSGST} taxRateToHSNMapping={taxRateToHSNMapping} /> */}
    </div>   


    {/*Here starts Footer */}  

    <div className="table-container">
      <div className="table-wrapper">
        <table className="footer-table">
          <thead className="footer-table-head">
            <tr>
              <th className="footer-table-th" rowSpan="2">Class</th>
              <th className="footer-table-th" rowSpan="2">HSN/SAC</th>
              <th className="footer-table-th" rowSpan="2">Taxable Value</th>
              <th className="footer-table-th" colSpan="2">Central Tax</th>
              <th className="footer-table-th" colSpan="2">State Tax</th>
              <th className="footer-table-th" rowSpan="2">Total Tax Amount</th>
            </tr>
            <tr>
              <th className="footer-table-th">Tax</th>
              <th className="footer-table-th">Amount</th>
              <th className="footer-table-th">Tax</th>
              <th className="footer-table-th">Amount</th>
            </tr>
          </thead>
          <tbody className="footer-table-body">
          {sortedTaxRates.map((taxRate) => {
            const { hsnCodes, totalAmounts } = taxRateToHSNMapping[taxRate];
            
            // Assuming CGST and SGST rates are half of the taxRate
            const cgstRate = parseFloat(taxRate) / 2;
            const sgstRate = parseFloat(taxRate) / 2;
            const cgstAmount = (parseFloat(totalAmounts) * (cgstRate / 100)).toFixed(2);
            const sgstAmount = (parseFloat(totalAmounts) * (sgstRate / 100)).toFixed(2);
            const totalTaxAmount = (parseFloat(cgstAmount) + parseFloat(sgstAmount)).toFixed(2);

            return (
              <tr key={taxRate}>
                <td>{taxRate}</td>
                <td>{hsnCodes}</td>
                <td>{parseFloat(totalAmounts)}</td>
                <td>{cgstRate}%</td>
                <td>{cgstAmount}</td>
                <td>{sgstRate}%</td>
                <td>{sgstAmount}</td>
                <td>{totalTaxAmount}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={8} className="vhead">Rupees In Words:
              <h1 className="amntwords">grandTotalInWords</h1>
            </td>
          </tr>
          <tr>
            <td colSpan={8} className="vhead">Declaration:
              <h1 className="decleration">We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct</h1>
            </td>
          </tr>
        </tbody>
        </table>
        <table className="footer-table-2">
          <tbody className="footer-table-body-2">
            <tr><td className="totals">Total Taxable</td><td>totalAmount</td></tr>
            <tr><td>CGST</td><td>cgst</td></tr>
            <tr><td>SGST</td><td>sgst</td></tr>
            <tr><td>Round Off</td><td>roundoff</td></tr>
            <tr><td>Grand Total</td><td>roundedGrandTotal</td></tr>
            <tr><td className="signature" colSpan={2}>sf</td></tr>
          </tbody>
        </table>
      </div>
      <div><h1 className="computerGen">This is a Computer Generated Invoice</h1></div>
    </div>
    </div>
    </div>


        </>


      );
    };
    


export default NewInvoice