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
import { DataGrid } from "@mui/x-data-grid";
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
    },
  ];

  const orders = [
    {
      id: 1,
      order: "ORD-007",
      customer: "Ekaterina Tankova",
      date: "Mar 8, 2024",
      status: "Pending",
      color: "#f1b44c",
    },
    {
      id: 2,
      order: "ORD-006",
      customer: "Cao Yu",
      date: "Mar 8, 2024",
      status: "Delivered",
      color: "#34c38f",
    },
    {
      id: 3,
      order: "ORD-005",
      customer: "Alex Smith",
      date: "Mar 7, 2024",
      status: "Pending",
      color: "#f1b44c",
    },
    {
      id: 4 ,
      order: "ORD-005",
      customer: "Alex Smith",
      date: "Mar 7, 2024",
      status: "Pending",
      color: "#f1b44c",
    },
    {
      id: 5,
      order: "ORD-005",
      customer: "Alex Smith",
      date: "Mar 7, 2024",
      status: "Pending",
      color: "#f1b44c",
    },
  ];

  const columns = [
    { field: "order", headerName: "Order",minWidth:200,},
    { field: "customer", headerName: "Customer",minWidth:200,},
    { field: "date", headerName: "Date",minWidth:200, },
    {
      field: "status",
      headerName: "Status",
      
      renderCell: (params) => (
        <span
          style={{
            backgroundColor: params.row.color,
            color: "white",
            paddingInline: "8px",
            paddingBlock: "5px",
            borderRadius: "20px",
          }}
        >
          {params.value}
        </span>
      ),
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
          marginBlockEnd: "130px",
          marginLeft: "0px",
          "@media (max-width:900px) and (min-width:768px)": {
            paddingInline: 1,
          },
          "@media (max-width:520px) and (min-width:320px)": {
            paddingInline: 1,
          },
        }}
      >
        <Grid container spacing={2}>
          {statCards.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #c3c7cc63",
                  borderRadius: "20px",
                  height: "180px",
                  boxShadow: "none",
                  paddingInline: "10px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "10px",
                      paddingBlockStart: "20px",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.secondary", fontWeight: 500 }}
                    >
                      {item.label.toUpperCase()}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 500 }}>
                      {item.value}
                    </Typography>
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

                {(item.percentage || item.progressValue) && (
                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    {item.percentage && (
                      <Typography
                        variant="body2"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          paddingInlineStart: "10px",
                          color: item.percentage < 15 ? "green" : "red",
                        }}
                      >
                        {item.trend}
                        {item.percentage}
                        {item.percentageString}
                      </Typography>
                    )}
                    {item.description && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "14px",
                          color: "text.secondary",
                          marginInlineStart: "10px",
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                    <Box sx={{ paddingInline: "20px" }}>
                      {item.progressValue && (
                        <>
                          <Typography
                            variant="body2"
                            sx={{
                              marginBlockStart: "-10px",
                              color: "text.secondary",
                            }}
                          >
                            Progress: {item.progressValue}%
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={item.progressValue}
                            sx={{
                              height: 4,
                              width: "200%",
                              maxWidth: "500px",
                              mt: 1,
                              backgroundColor: "#e0e0e0",
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: item.color,
                              },
                            }}
                          />
                        </>
                      )}
                    </Box>
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                border: "1px solid #c3c7cc63",
                borderRadius: "20px",
                paddingBlockEnd: "5px",
              }}
            >
              <CardContent>
                <Typography variant="h6">Sales</Typography>
                <Chart
                  options={salesChartData.options}
                  series={salesChartData.series}
                  type="bar"
                  height={350}
                  sx={{ width: { sm: "75vw", md: "627px" } }}
                />
              </CardContent>
              <Divider sx={{}}></Divider>
              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "transparent",
                  color: "black",
                  left: { md: "580px", sm: "83vw", xs:"63vw" },
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
            <Card
              sx={{
                border: "1px solid #c3c7cc63",
                borderRadius: "20px",
                minHeight: "400px",
              }}
            >
              <CardContent>
                <Typography variant="h6">Traffic Source</Typography>
                <Chart
                  options={{
                    ...trafficChartData.options,
                    responsive: [
                      {
                        breakpoint: 480,
                        options: {
                          chart: {
                            width: "100%",
                            height: 300,
                          },
                        },
                      },
                    ],
                  }}
                  series={trafficChartData.series}
                  type="donut"
                  height="105%"
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
                      <ListItem key={index} sx={{ height: "60px" }}>
                        <ListItemAvatar>
                          <Avatar src={product.img} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={product.name}
                          secondary={product.date}
                        />
                        <IconButton sx={{ height: "50px", width: "40px" }}>
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
                    left: { md: "270px", sm: "85vw" , xs:'60vw'},
                    mt: "0px",
                    top: "10px",
                    fontSize: "13px",
                    textTransform: "none",
                    mb: 0,
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
          marginBlockStart: "17px",
          marginLeft: "-16px",
          marginRight: "-16px",
        }}
      />
      <Box
        sx={{
          height: 400,
          width: "100%",
          overflow: "auto",
          "@media (max-width:600px)": {
            height: 300, 
            overflowX: "auto", 
            overflowY: "auto",
          },
        }}
      >
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          rowHeight={65}
        />
      </Box>
    </CardContent>
    <Button
      endIcon={<ArrowForwardIcon />}
      sx={{
        backgroundColor: "transparent",
        color: "black",
        left: { md: "690px", sm: "85vw", xs:'63vw' },
        mt: "10px",
        top: "-10px",
        fontSize: "13px",
        textTransform: "none",
      }}
    >
      View all
    </Button>
  </Card>
</Grid>

        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
