const userModel = require("../models/UserModel");
const adminModel = require("../models/AdminModel");
const hallModel = require("../models/HallsModel")
const bookingModel = require('../models/BookingModel');
const Mail = require('../utils/Mail');

exports.RequestBooking = async (req, res, next) => {

    const { Email, Name, Hall, Mobile, date } = req.body;

    const halll = await hallModel.findById(Hall);
    const book = await bookingModel.insertMany({
        "Name": Name,
        "Email": Email,
        "Mobile": Mobile,
        "HallID": halll._id,
        "Date": date
    })

    res.status(200).json({
        success: true,
        book,
        halll

    })
}

exports.FetchPendingBookings = async (req, res, next) => {
    const Bookingdata = await bookingModel.find({ status: "pending" });
    hallid = Bookingdata.HallID
    const Halldata = await hallModel.findOne(hallid, { HallName: 1, _id: 0 })
    res.status(200).send({
        success: "true",
        Bookingdata,
        Halldata
        //for testing

    })

}

exports.FetchAcceptedBookings = async (req, res, next) => {
    const Bookingdata = await bookingModel.find({ status: "accepted" });
    hallid = Bookingdata.HallID
    const Halldata = await hallModel.findOne(hallid, { HallName: 1, _id: 0 })
    res.status(200).send({
        success: "true",
        Bookingdata,
        Halldata
        //for testing

    })

}

exports.FetchClosedBookings = async (req, res, next) => {
    const Bookingdata = await bookingModel.find({ status: "closed" });
    hallid = Bookingdata.HallID
    const Halldata = await hallModel.findOne(hallid, { HallName: 1, _id: 0 })
    res.status(200).send({
        success: "true",
        Bookingdata,
        Halldata
        //for testing

    })

}

exports.AcceptsPendingBooking = async (req, res, next) => {
    try {


        const booking = await bookingModel.findByIdAndUpdate(req.params.id, { status: "accepted" })
        await hallModel.findByIdAndUpdate(booking.HallID, { Status: "Occupied" })
        await hallModel.find({ _id: booking.HallID }).then((doc) => {

            const to = booking.Email;
            const subject = "Your Requeest To Book Hall Is Succesfully ";
            const message = `
            
            <p>Subject: Confirmation of Banquet Hall Booking</p>

           <p> Dear Customer, <p/><br/><br/>
            
            We are thrilled to inform you that your banquet hall booking has been successfully confirmed at EventSpot. <br/>Thank you for choosing our services for your special event.
            <br/>
           <b> Booking Details:</b> <br/>
           <b>   Event Date: ${booking.Date}</b> <br/>
           <b>   Banquet Hall: ${booking.HallID}</b> <br/> <br/>
            
            
            We understand that your event holds immense importance to you, and we assure you that we will make every effort to make it a memorable experience. <br/>Our team will be dedicated to providing you with exceptional service, ensuring that all your requirements are met.
            
            <br/>If you have any specific requests or additional details to share regarding your event, please feel free to get in touch with our event planning team.<br/> They will be more than happy to assist you and ensure that everything is arranged according to your preferences.
            
           <br/> Once again, thank you for choosing EventSpot. We look forward to hosting your event and creating beautiful memories together.<br/> Should you have any further queries, please do not hesitate to contact us.
            
           <br/> Best regards, <br/><br/><br/>
            
            Sharjun Hussain<br/>
            Eventspot<br/>
            For More Details : +94757340891  `

            Mail(subject, to, message);


            res.status(200).json({
                success: "true",
                doc
            })

        }).catch((err) => {
            res.status(400).json({
                success: "False",
                Message: "404 Not Found",
                err
            })
        })
    } catch (err) {
        console.log(err);
    }
}

exports.DeclinePendingBookings = async (req, res, next) => {


    const booking = await bookingModel.findByIdAndUpdate(req.params.id, { status: "closed" })
        await hallModel.findByIdAndUpdate(booking.HallID, { Status: "Available" })
        await hallModel.find({ _id: booking.HallID }).then((doc) => {

        //     const to = booking.Email;
        //     const subject = "Your Requeest To Book Hall Is Succesfully ";
        //     const message = `
            
        //     <p>Subject: Coniirmation of Banquet Hall Booking</p>

        //    <p> Dear Customer, <p/><br/><br/>
        
        //     We are thrilled to inform you that your banquet hall booking has been successfully confirmed at EventSpot. <br/>Thank you for choosing our services for your special event.
        //     <br/>
        //    <b> Booking Details:</b> <br/>
        //    <b>   Event Date: ${booking.Date}</b> <br/>
        //    <b>   Banquet Hall: ${booking.HallID}</b> <br/> <br/>
            
            
        //     We understand that your event holds immense importance to you, and we assure you that we will make every effort to make it a memorable experience. <br/>Our team will be dedicated to providing you with exceptional service, ensuring that all your requirements are met.
            
        //     <br/>If you have any specific requests or additional details to share regarding your event, please feel free to get in touch with our event planning team.<br/> They will be more than happy to assist you and ensure that everything is arranged according to your preferences.
            
        //    <br/> Once again, thank you for choosing EventSpot. We look forward to hosting your event and creating beautiful memories together.<br/> Should you have any further queries, please do not hesitate to contact us.
            
        //    <br/> Best regards, <br/><br/><br/>
            
        //     Sharjun Hussain<br/>
        //     Eventspot<br/>
        //     For More Details : +94757340891  `

        //     Mail(subject, to, message);



        res.status(200).json({
            success: "true",
            doc
        })

    }).catch((err) => {
        res.status(400).json({
            success: "Flase",
            Message: "404 Not Found",
            err
        })
    })



}

exports.MakePendingBookings = async (req, res, next) => {


    const booking = await bookingModel.findByIdAndUpdate(req.params.id, { status: "pending" }).then((doc) => {


        res.status(200).json({
            success: "true",
            doc
        })

    }).catch((err) => {
        res.status(400).json({
            success: "Flase",
            Message: "404 Not Found",
            err
        })
    })



}

