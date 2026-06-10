import React from 'react';
import { useEEGStore } from '../store/eeg';

export const EmptyGuide: React.FC = () => {
  const { isStreaming, setStreaming, isRecording, recordings, startRecording } = useEEGStore();

  const handleToggleStream = () => {
    setStreaming(!isStreaming);
  };

  const handleStartRecording = () => {
    if (!isStreaming) {
      setStreaming(true);
    }
    if (!isRecording) {
      startRecording();
    }
  };

  const steps = [
    {
      icon: '🔌',
      title: '连接设备',
      desc: isStreaming ? '设备已连接，数据采集中' : '点击下方按钮连接 EEG 采集设备并开始实时数据流',
      actionLabel: isStreaming ? '断开设备' : '连接设备',
      actionColor: isStreaming ? '#757575' : 'linear-gradient(135deg, #1976d2, #1565c0)',
      onClick: handleToggleStream,
      statusTag: isStreaming ? '已连接' : '未连接',
      statusColor: isStreaming ? '#388e3c' : '#9e9e9e',
    },
    {
      icon: '📊',
      title: '开始采集',
      desc: '连接设备后点击录制按钮，开始保存当前通道的脑电数据',
      actionLabel: '开始录制',
      actionColor: 'linear-gradient(135deg, #d32f2f, #b71c1c)',
      onClick: handleStartRecording,
      statusTag: isRecording ? '采集中' : (isStreaming ? '可开始' : '需先连接'),
      statusColor: isRecording ? '#d32f2f' : (isStreaming ? '#f9a825' : '#9e9e9e'),
      disabled: !isStreaming && !isRecording,
    },
    {
      icon: '📼',
      title: '查看回放',
      desc: recordings.length > 0
        ? `当前有 ${recordings.length} 条录制记录，在右侧"录制与回放"面板选择一条即可回放`
        : '暂无历史录制，请先完成一次采集',
      statusTag: recordings.length > 0 ? `${recordings.length} 条记录` : '暂无记录',
      statusColor: recordings.length > 0 ? '#1565c0' : '#9e9e9e',
    },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        marginBottom: '12px',
      }}>
        🧠
      </div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
        暂无数据
      </div>
      <div style={{ fontSize: '12px', color: '#999', marginBottom: '16px', textAlign: 'center' }}>
        按以下三步开始使用 EEG Lab
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '12px 14px',
              borderRadius: '10px',
              background: '#f8fafc',
              border: '1px solid #edf2f7',
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              flexShrink: 0,
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#fff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
              }}>
                {step.icon}
              </div>
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                lineHeight: '18px',
                borderRadius: '50%',
                background: '#1565c0',
                color: '#fff',
                fontSize: '11px',
                textAlign: 'center',
                fontWeight: 700,
              }}>{i + 1}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#333' }}>
                  {step.title}
                </div>
                <span style={{
                  fontSize: '10px',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  background: `${step.statusColor}15`,
                  color: step.statusColor,
                  fontWeight: 600,
                }}>
                  {step.statusTag}
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', lineHeight: '1.4' }}>
                {step.desc}
              </div>
              {step.onClick && (
                <button
                  onClick={step.onClick}
                  disabled={(step as any).disabled}
                  style={{
                    padding: '6px 14px',
                    background: (step as any).disabled ? '#bdbdbd' : step.actionColor,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: (step as any).disabled ? 'not-allowed' : 'pointer',
                    opacity: (step as any).disabled ? 0.5 : 1,
                  }}
                >
                  {step.actionLabel}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
