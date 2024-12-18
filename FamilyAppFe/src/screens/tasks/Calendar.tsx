import { StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
        backgroundColor: '#F7F7F7',
        marginRight: 10,
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

const MyAgenda = () => {
    const [items, setItems] = useState({
        '2024-12-16': [{ name: 'Meeting with team', height: 80 }],
        '2024-12-17': [{ name: 'Doctor appointment', height: 50 }],
        '2024-12-18': [
            { name: 'Workout session', height: 70 },
            { name: 'Lunch with Sarah', height: 60 },
        ],
    });

    return (
        <View style={styles.agendaContainer}>
            <Agenda
                items={items}
                renderItem={(item) => (
                    <View style={styles.agendaItem}>
                        <Text style={styles.agendaItemText}>{item.name}</Text>
                    </View>
                )}
                renderDay={(day, item) => (
                    <View>
                        <Text style={styles.selectedDayText}>{day?.day}</Text>
                    </View>
                )}
                theme={{
                    selectedDayBackgroundColor: '#000000',
                    selectedDayTextColor: '#FFFFFF',
                    todayTextColor: '#FF3B30',
                    textDisabledColor: '#D9E1E8',
                    dotColor: '#FF3B30',
                }}
            />
        </View>
    );
};

export default MyAgenda;
