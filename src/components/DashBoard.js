import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  LinearProgress,
  Divider,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Chart from "react-apexcharts";
import AppHeader from "./AppHeader";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      inputRef.current.focus();
    }
  };

  const statCards = [
    {
      label: "Budget",
      value: "$24k",
      color: "#556ee6",
      icon: <AttachMoneyIcon />,
      percentage: 12,
      percentageString: "%",
      trend: <ArrowUpwardIcon />,
      description: "Since last month",
    },
    {
      label: "Total Customers",
      value: "1.6k",
      color: "#34c38f",
      icon: <GroupIcon />,
      percentage: 16,
      percentageString: "%",
      trend: <ArrowDownwardIcon />,
      description: "Since last month",
    },
    {
      label: "Task Progress",
      value: "75.5%",
      color: "#f1b44c",
      icon: <TrendingUpIcon />,
      progressValue: 75.5,
    },
    {
      label: "Total Profit",
      value: "$15k",
      color: "#f46a6a",
      icon: <MonetizationOnIcon />,
    },
  ];

  const salesChartData = {
    series: [{ name: "Sales", data: [30, 40, 45, 50, 49, 60, 70, 91] }],
    options: {
      chart: { type: "bar", height: 200 },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      },
      colors: ["#556ee6"],
    },
  };

  const trafficChartData = {
    series: [63, 15, 22],
    options: {
      chart: {
        type: "donut",
        width: "100%",
        height: "350px",
      },
      labels: ["Desktop", "Tablet", "Phone"],
      colors: ["#f1b44c", "#34c38f", "#556ee6"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
              height: "350px",
            },
          },
        },
      ],
    },
  };
  const trafficData = [
    { label: "Desktop", value: 63, icon: <DesktopMacIcon /> },
    { label: "Tablet", value: 15, icon: <TabletMacIcon /> },
    { label: "Mobile", value: 22, icon: <SmartphoneIcon /> },
  ];

  const products = [
    {
      name: "Soja & Co. Eucalyptus",
      date: "Updated Mar 8, 2024",
      img: "images/product-5.png",
    },
    {
      name: "Necessaire Body Lotion",
      date: "Updated Mar 8, 2024",
      img: "images/product-5.png",
    },
    {
      name: "Necessaire Body Lotion",
      date: "Updated Mar 8, 2024",
      img: "images/product-5.png",
    },
    {
      name: "Necessaire Body Lotion",
      date: "Updated Mar 8, 2024",
      img: "images/product-5.png",
    },
    {
      name: "Necessaire Body Lotion",
      date: "Updated Mar 8, 2024",
      img: "images/product-5.png",
    }
  ];

  const orders = [
    {
      order: "ORD-007",
      customer: "Ekaterina Tankova",
      date: "Mar 8, 2024",
      status: "Pending",
      color: "#f1b44c",
    },
    {
      order: "ORD-006",
      customer: "Cao Yu",
      date: "Mar 8, 2024",
      status: "Delivered",
      color: "#34c38f",
    },
    {
      order: "ORD-006",
      customer: "Cao Yu",
      date: "Mar 8, 2024",
      status: "Delivered",
      color: "#34c38f",
    },
    {
      order: "ORD-006",
      customer: "Cao Yu",
      date: "Mar 8, 2024",
      status: "Delivered",
      color: "#34c38f",
    },
    {
      order: "ORD-006",
      customer: "Cao Yu",
      date: "Mar 8, 2024",
      status: "Delivered",
      color: "#34c38f",
    },
    {
      order: "ORD-007",
      customer: "Ekaterina Tankova",
      date: "Mar 8, 2024",
      status: "Pending",
      color: "#f1b44c",
    },
  ];

  return (
    <>

      <Box
        sx={{
          paddingInlineStart: 2,
          backgroundColor: "#f5f5f5",
          minHeight: "180vh",
          marginTop: "50px",
          marginBlockEnd:'130px',
          marginLeft:'0px',
          "@media (max-width:900px) and (min-width:768px)":{
            paddingInline:1
          }
        }}
      >
        <Grid container spacing={2}>
          {statCards.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ paddingInline: 0 }}
            >
              <Card
                sx={{
                  textAlign: "left",
                  paddingBlockStart: 3,
                  border: "1px solid #c3c7cc63",
                  borderRadius: "20px",
                  height: "160px",
                  width:{
                    md:"280px",
                    sm:"45vw"
                  },
                  boxShadow: "none",
                  paddingInline: 0,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "start",
                    paddingInline: "0px",
                    paddingBlock: "10px",
                  }}
                >
                  <Box sx={{ paddingInline: 0 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                        fontSize: "10px",
                        wordSpacing: 2,
                        letterSpacing: 1,
                        "@media (max-width:900px) and (min-width:768px)":{
                          fontSize:'15px'
                        }
                      }}
                    >
                      {item.label.toUpperCase()}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "500", marginBlockStart: "10px" }}
                    >
                      {item.value}
                    </Typography>
                    {item.label === "Task Progress" ? (
                      <>
                        <Typography
                          variant="body2"
                          sx={{ mt: 1, color: "text.secondary" }}
                        >
                          Progress: {item.progressValue}%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={item.progressValue}
                          sx={{
                            height: 4,
                            width: "100%",
                            maxWidth: "500px",
                            mt: 1,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: item.color,
                              maxWidth: "100%",
                            },
                          }}
                        />
                      </>
                    ) : (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          justifyContent: "space-evenly",
                          display: "flex",
                          alignItems: "center",
                          marginBlockStart: "20px",
                        }}
                      >
                        <span
                          style={{
                            color: item.percentage < 15 ? "green" : "red",
                          }}
                        >
                          {item.trend}
                        </span>
                        <span
                          style={{
                            color: item.percentage < 15 ? "green" : "red",
                            marginLeft: "8px",
                          }}
                        >
                          {item.percentage}
                          {item.percentageString}
                        </span>
                        <span
                          style={{
                            fontSize: "15px",
                            marginInlineStart: "15px",
                            "@media (max-width:900px) and (min-width:768px)":{
                              fontSize:'15px'
                            }
                          }}
                        >
                          {item.description}
                        </span>
                      </Typography>
                    )}
                  </Box>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: item.color,
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12} md={7}>
            <Card sx={{ border: "1px solid #c3c7cc63", borderRadius: "20px", paddingBlockEnd:'5px' }}>
              <CardContent>
                <Typography variant="h6">Sales</Typography>
                <Chart
                  options={salesChartData.options}
                  series={salesChartData.series}
                  type="bar"
                  height={350}
                  sx={{width:{sm:"75vw", md:"627px"}}}
                />
              </CardContent>
              <Divider sx={{}}></Divider>
              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "transparent",
                  color: "black",
                  left:{md:"600px" , sm:"85vw"},
                  mt: "5px",
                  fontSize: "13px",
                  textTransform: "none",
                }}
              >
                {" "}
                Overview{" "}
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ border: "1px solid #c3c7cc63", borderRadius: "20px" }}>
              <CardContent>
                <Typography variant="h6">Traffic Source</Typography>
                <Chart
                  options={trafficChartData.options}
                  series={trafficChartData.series}
                  type="donut"
                  height="100%"
                  width="100%"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  {trafficData.map((item, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                      {item.icon}
                      <Typography variant="body2">{item.label}</Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {item.value}%
                      </Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ border: "1px solid #c3c7cc63", borderRadius: "20px" }}>
              <CardContent>
                <Typography variant="h6">Latest Products</Typography>

                <List>
                  {products.map((product, index) => (
                    <>
                      <Divider
                        sx={{
                          backgroundColor: "#c3c7cc63",
                          marginBlockStart: "10px",
                          marginLeft: "-16px",
                          marginRight: "-16px",
                        }}
                      />
                      <ListItem key={index} sx={{height:'60px'}}>
                        <ListItemAvatar>
                          <Avatar src={product.img} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={product.name}
                          secondary={product.date}
                        />
                        <IconButton sx={{height:"50px", width:'40px'}}>
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </IconButton>
                      </ListItem>
                    </>
                  ))}
                  <Divider
                    sx={{
                      backgroundColor: "#c3c7cc63",
                      marginBlockStart: "10px",
                      marginLeft: "-16px",
                      marginRight: "-16px",
                    }}
                  />
                </List>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: "transparent",
                    color: "black",
                    left:{md:"280px", sm:"82vw"},
                    mt: "0px",
                    top:"10px",
                    fontSize: "13px",
                    textTransform: "none",
                    mb:0
                  }}
                >
                  {" "}
                  View all{" "}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ border: "1px solid #c3c7cc63", borderRadius: "20px" }}>
              <CardContent>
                <Typography variant="h6">Latest Orders</Typography>
                <Divider
                  sx={{
                    backgroundColor: "#c3c7cc63",
                    marginBlockStart: "10px",
                    marginLeft: "-16px",
                    marginRight: "-16px",
                  }}
                />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 500, color: "gray" }}>
                        Order
                      </TableCell>
                      <TableCell sx={{ fontWeight: 500, color: "gray" }}>
                        Customer
                      </TableCell>
                      <TableCell sx={{ fontWeight: 500, color: "gray" }}>
                        Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: 500, color: "gray" }}>
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{order.order}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              backgroundColor: order.color,
                              color: "white",
                              paddingInline: "8px",
                              paddingBlock: "5px",
                              borderRadius: "20px",
                            }}
                          >
                            {order.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "transparent",
                  color: "black",
                  left:{md:"700px", sm:"85vw"},
                  mt: "10px",
                  top:'-10px',
                  fontSize: "13px",
                  textTransform: "none",
                }}
              >
                {" "}
                View all{" "}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
