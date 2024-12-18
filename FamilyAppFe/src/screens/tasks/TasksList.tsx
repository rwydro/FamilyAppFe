import React, { useCallback, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import {Agenda, Calendar, DateData} from 'react-native-calendars';
import {CalendarList} from "react-native-calendars/src";
import dayjs from "dayjs";
import {black, textGreyColor, white} from "@/design/colors";
import ExpandableCalendar from "@/screens/tasks/Calendar";
import { PaperProvider, List } from 'react-native-paper';



interface AgendaItem {
    name: string;
    height: number;
}

interface AgendaItemsMap {
    [date: string]: AgendaItem[];
}

export const TasksList: React.FC = () => {
    const [items, setItems] = useState<AgendaItemsMap>({
        '2024-12-10': [{ name: 'Meeting with team', height: 80 }],
    });

    const loadItems = useCallback((day: { dateString: string, timestamp: number }) => {
        // Lazy loading example: fill days dynamically
        const newItems: AgendaItemsMap = {};
        const date = new Date(day.timestamp);
        const dateString = date.toISOString().split('T')[0];
        newItems[dateString] = [
            {
                name: `Event for ${dateString}`,
                height: Math.max(50, Math.floor(Math.random() * 150)),
            },
            {
                name: `Event for ${dateString}2`,
                height: Math.max(50, Math.floor(Math.random() * 150)),
            },
            {
                name: `Event for ${dateString}3`,
                height: Math.max(50, Math.floor(Math.random() * 150)),
            },
        ];
        setItems(newItems);
    }, []);

    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>No events for this day</Text>
            </View>
        );
    };

    const [expanded, setExpanded] = useState<string[]>([])
    const setExpandTask = useCallback((name:string, isElementExpanded: boolean) => {
        isElementExpanded ? setExpanded(expanded.filter(el => el !== name)) : setExpanded([name, ...expanded])
    },[expanded]);

    const renderItems = useCallback((item: {name: string}, index, wwww) => {
        const isElementExpanded = !!expanded.find(el => el === item.name)
            return(
                <View style={styles.agendaItem}>
                <List.Accordion
                    title={item.name}
                    expanded={isElementExpanded}
                    onPress={() => setExpandTask(item.name, isElementExpanded)}
                    style= {{backgroundColor: 'white'}}
                    titleStyle={{color: 'black'}}
                >
                        <List.Item title="qweqwe"/>
                </List.Accordion>
            
            </View>
            )
    }, [expanded])


    return (
        <View style={styles.agendaContainer}>
            <PaperProvider>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={dayjs().format('YYYY-MM-DD')}
                renderItem={renderItems}
                renderDay={(day, item) => (
                    <View>
                        <Text style={styles.selectedDayText}>{day?.day}</Text>
                    </View>
                )}
                pastScrollRange={12} // Liczba miesięcy do przewijania wstecz
                futureScrollRange={12} // Liczba miesięcy do przewijania w
                theme={{
                    agendaDayTextColor: 'blue',
                    agendaDayNumColor: 'green',
                    todayTextColor: 'red',
                    selectedDayBackgroundColor: '#000000',
                    selectedDayTextColor: '#FFFFFF',
                    textDisabledColor: '#C7C7CC',
                    dotColor: '#5E5E5E',
                }}
            />
        </PaperProvider>
        </View>
    )
};

export const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 10,
    },
    calendarDayText: {
        color: '#8E8E93',
        fontSize: 14,
        fontWeight: '400',
    },
    calendarDateText: {
        color: '#1C1C1E',
        fontSize: 12,
        fontWeight: '400',
        marginTop: 4,
    },
    selectedDayCircle: {
        backgroundColor: '#000000',
        borderRadius: 50,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedDayText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
    headerText: {
        color: '#1C1C1E',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    weekDayText: {
        color: '#8E8E93',
        fontSize: 12,
        fontWeight: '300',
    },
    agendaContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    agendaItem: {
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 17,
        borderRadius: 10,
        padding: 10,
    },
    agendaItemText: {
        color: '#1C1C1E',
        fontSize: 14,
        fontWeight: '400',
    },
});