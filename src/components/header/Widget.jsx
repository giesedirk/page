// Keep in mind that these are the styles from flatpickr package
// See troubleshooting section in case you have problems importing the styles

import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'
import {useState} from 'react'

export const Widget = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	
	return (
		<>
			<div className="widget" data-name="Sticky-Widget">
				{/*
				<NavMenuButton />
				<GutscheinBtn />
				<AnfragenBtn />
				<BuchenBtn />
				*/}
				
				<form className="widget-form-book" name="cst_box_book" method="get"
				      action="/de/zimmer-suiten/buchen/vsc.php" id="cst_box_book"><label
					className="widget-date widget-date-from"><input name="calendar_date_from"
				                                                    readOnly="readonly" type="hidden"
				                                                    id="widget_1561739_date_from"
				                                                    placeholder="Anreise"
				                                                    className="flatpickr-input"/><input
					className="flatpickr-input form-control input active" placeholder="Anreise" tabIndex="0"
					type="text" readOnly="readonly"/></label><label
					className="widget-date widget-date-to"><input name="calendar_date_to" readOnly="readonly"
				                                                  type="hidden" id="widget_1561739_date_to"
				                                                  placeholder="Abreise"
				                                                  className="flatpickr-input"/><input
					className="flatpickr-input form-control input" placeholder="Abreise" tabIndex="0"
					type="text" readOnly="readonly"/></label><label
					className="widget-button widget-button-inquire"><input type="submit" name="submitinquire"
				                                                           value="Anfragen"
				                                                           id="widget_1561739_inquire"
				                                                           onClick="this.form.action='/de/zimmer-suiten/buchen/transaction.php'"/></label><label
					className="widget-button widget-button-book"><input type="submit" name="submitbook"
				                                                        value="Buchen"
				                                                        id="widget_1561739_book"/></label><input
					type="hidden" name="step" value="roomtypes"/><input type="hidden" name="vri_id"
				                                                        value="19489"/><input type="hidden"
				                                                                              name="c[id_hotel]"
				                                                                              value="5250"/>
				</form>
				<form className="widget-form-voucher" name="cst_box_voucher" method="get"
				      action="/(cms)/module/pass/3/redir-struct/193141/de/" id="cst_box_voucher">
					<button type="submit" className="widget-button widget-button-voucher"><span>Gutschein</span>
					</button>
					<input type="hidden" name="view" value="vouchers"/></form>
			</div>
		</>
	)
}